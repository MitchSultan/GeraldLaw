import React from 'react'

export default function Timeline() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-h-screen overflow-hidden'>
       <div>
    <img src="/images/lw3.jpeg" className='w-full h-auto'></img>
</div>

<div>
    <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Our Journey</h2>
        <ol
  className="relative space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200"
>
  <li className="relative -ms-1.5 flex items-start gap-4">
    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

    <div className="-mt-2">
      <time className="text-xs/none font-medium text-gray-700">12/02/2025</time>

      <h3 className="text-lg font-bold text-gray-900">Kickoff</h3>

      <p className="mt-0.5 text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
        adipisci tenetur sunt quae exercitationem sed pariatur porro!
      </p>
    </div>
  </li>

  <li className="relative -ms-1.5 flex items-start gap-4">
    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

    <div className="-mt-2">
      <time className="text-xs/none font-medium text-gray-700">15/03/2025</time>

      <h3 className="text-lg font-bold text-gray-900">First Milestone</h3>

      <p className="mt-0.5 text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
        adipisci tenetur sunt quae exercitationem sed pariatur porro!
      </p>
    </div>
  </li>

  <li className="relative -ms-1.5 flex items-start gap-4">
    <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

    <div className="-mt-2">
      <time className="text-xs/none font-medium text-gray-700">24/04/2025</time>

      <h3 className="text-lg font-bold text-gray-900">Launch</h3>

      <p className="mt-0.5 text-sm text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
        adipisci tenetur sunt quae exercitationem sed pariatur porro!
      </p>
    </div>
  </li>
</ol>
</div>

    </div>
  )
}
