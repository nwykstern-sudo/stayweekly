export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between border-b px-8 py-6">
        <div className="text-2xl font-bold text-green-700">StayWeekly</div>
        <div className="flex items-center gap-3">
          <a className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50" href="/search">
            숙소 찾기
          </a>
          <button className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">호스트 사이트</button>
          <button className="rounded-lg bg-green-700 px-4 py-2 text-sm text-white hover:bg-green-800">
            로그인 / 회원가입
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          한 달 살기, 가장 스마트하게
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          워케이션과 장기 숙박을 위한 주 단위 임대 플랫폼
        </p>

        <div className="mx-auto mt-10 flex max-w-3xl items-center gap-2 rounded-full border bg-white p-2 shadow-sm">
          <input
            className="w-full flex-1 rounded-full px-5 py-3 outline-none"
            placeholder="지역을 입력하세요 (예: 강남, 제주, 해운대)"
          />
          <a
            href="/search"
            className="inline-flex h-11 items-center justify-center rounded-full bg-green-700 px-6 text-sm font-medium text-white hover:bg-green-800"
          >
            검색
          </a>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
          {["오피스텔", "원룸", "투룸+", "아파트", "제주", "고시원", "원룸텔", "단기임대"].map((c) => (
            <span key={c} className="rounded-full border px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 pb-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">최근 등록된 숙소</h2>
          <a className="text-sm text-green-700 hover:underline" href="/search">
            더 보기 →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a
              key={i}
              href={`/listing/${i}`}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-44 bg-gray-200" />
              <div className="p-4">
                <div className="mb-2 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  Weekly Stay
                </div>
                <div className="font-semibold">강남 오피스텔 #{i}</div>
                <div className="mt-1 text-sm text-gray-500">서울 · 강남구</div>
                <div className="mt-3 text-base font-bold">₩800,000 / week</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
