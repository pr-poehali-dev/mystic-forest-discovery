export default function Footer() {
  return (
    <div
      id="footer"
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div
            className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between"
            style={{ background: "linear-gradient(160deg, #1a2e0d 0%, #2d1a0a 100%)" }}
          >
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm font-medium tracking-wide" style={{ color: "#c4873a" }}>
                  Навигация
                </h3>
                <a href="#oils" className="transition-colors duration-300 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d49a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  Все масла
                </a>
                <a href="#" className="transition-colors duration-300 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d49a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  О производстве
                </a>
                <a href="#footer" className="transition-colors duration-300 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d49a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  Контакты
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm font-medium tracking-wide" style={{ color: "#c4873a" }}>
                  Соцсети
                </h3>
                <a href="#" className="transition-colors duration-300 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d49a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  ВКонтакте
                </a>
                <a href="#" className="transition-colors duration-300 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d49a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  Telegram
                </a>
                <a href="#" className="transition-colors duration-300 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d49a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  Instagram
                </a>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-xs sm:text-sm font-medium tracking-wide" style={{ color: "#c4873a" }}>
                  Контакты
                </h3>
                <span className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}>+7 (000) 000-00-00</span>
                <span className="text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.7)" }}>maslik@mail.ru</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1
                className="text-[18vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] mt-4 sm:mt-6 lg:mt-10 font-bold tracking-tight"
                style={{ color: "rgba(255,255,255,0.08)" }}
              >
                МАСЛИК
              </h1>
              <p className="text-sm sm:text-base pb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                © {new Date().getFullYear()} Маслик. Масла холодного отжима
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
