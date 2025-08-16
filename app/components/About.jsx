import React from 'react'

export default function About() {
  return (
    <div>
        <section className='max-h-screen overflow-hidden'>
  <div className=" max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
         Meet Gerald, Advocate of the High Court of Kenya.</h2>

          <p className="mt-4 text-gray-700">
            With a reputation built on professionalism and trust, Gerald has dedicated his career to helping individuals, businesses, and organizations navigate the complexities of the law. His practice spans across civil litigation, corporate law, family law, property disputes, and constitutional matters.
          </p>
        </div>
      </div>

      <div>
        <img
          src="/images/waki.jpeg"
          className="rounded max-w-full h-auto object-cover shadow-lg"
          alt=""
        />
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
