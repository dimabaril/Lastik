"use client";

import { useEffect, useState } from "react";
import { useIsTouch } from "@/app/components/TouchProvider";

interface ApplicationFormProps {
  onClose: () => void;
}

export default function ApplicationForm({ onClose }: ApplicationFormProps) {
  const [name, setName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [comment, setComment] = useState("");
  const [waitingList, setWaitingList] = useState(false);
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const isTouch = useIsTouch();

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflowX = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) {
      setError("Необходимо согласие на обработку персональных данных");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, telegram, comment, waitingList }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Что-то пошло не так");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Ошибка сети, попробуйте ещё раз");
    } finally {
      setLoading(false);
    }
  }

  return (
    /* backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-svh w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-4 text-black sm:p-8">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 cursor-pointer text-2xl leading-none text-black/40 hover:text-black"
          aria-label="Закрыть"
        >
          ✕
        </button>

        {success ? (
          <div className="flex flex-col items-center gap-6 py-8 text-center">
            <p className="font-unbounded text-2xl font-bold">
              Заявка отправлена!
            </p>
            <p className="font-onest text-base text-[#555]">
              Мы свяжемся с тобой в Telegram в ближайшее время.
            </p>
            <button
              onClick={onClose}
              className="font-unbounded rounded-xl bg-black px-10 py-3 text-base font-bold text-white"
            >
              Закрыть
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <h2 className="font-unbounded text-xl leading-tight font-bold sm:text-2xl">
              Мастерская по арт-дирекшену
              <br />
              от студии анимации Ластик
            </h2>

            {/* schedule */}
            <div className="rounded-lg bg-[#EDE8F5] px-5 py-4">
              <p className="font-unbounded text-sm font-bold">Расписание</p>
              <p className="font-onest text-sm">
                5 онлайн-встреч по субботам в 12:00 мск
              </p>
              <p className="font-onest text-sm">
                20.06, 27.06, 04.07, 11.07, 18.07
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="font-unbounded text-sm font-bold">
                  Как к тебе обращаться?
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus={!isTouch}
                  className="rounded-lg border border-[#D4D4D4] bg-[#F5F5F5] px-4 py-3 text-base outline-none focus:border-black focus:bg-white"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-unbounded text-sm font-bold">
                  Telegram
                </label>
                <input
                  type="text"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="Например: @username"
                  required
                  className="rounded-lg border border-[#D4D4D4] bg-[#F5F5F5] px-4 py-3 text-base outline-none focus:border-black focus:bg-white"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={waitingList}
                  onChange={(e) => setWaitingList(e.target.checked)}
                  className="h-5 w-5 shrink-0 cursor-pointer"
                />
                <span className="font-onest">
                  Хочу в лист ожидания на группу в будний день
                </span>
              </label>

              <div className="flex flex-col gap-1">
                <label className="font-unbounded text-sm font-bold">
                  Вопрос или комментарий
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                  className="rounded-lg border border-[#D4D4D4] bg-[#F5F5F5] px-4 py-3 text-base outline-none focus:border-black focus:bg-white"
                />
              </div>

              <label className="flex cursor-pointer items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="h-5 w-5 shrink-0 cursor-pointer"
                />
                <span className="font-onest text-xs leading-tight text-[#555]">
                  <span className="font-semibold text-black">
                    Согласен/согласна на обработку персональных данных
                  </span>
                  <br />
                  Имя, Telegram и комментарий используются только для связи по
                  заявке и организации участия в мастерской.
                </span>
              </label>

              {error && (
                <p className="font-onest text-sm text-red-500">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="font-unbounded w-full rounded-xl bg-black py-4 text-base font-bold text-white disabled:opacity-50"
              >
                {loading ? "Отправляем..." : "Отправить заявку"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
