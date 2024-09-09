import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
export const ContactMe = () => {
  return (
    <>

<footer className="bg-gray-900 text-gray-200 py-[3rem] h-[20vh] sm:h-[20vh] ">
  <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 ">
    <div className="">
      {/* <!-- Información de contacto --> */}
      <div>
        <ul className='flex justify-center gap-3'>
          <h3 class="text-lg font-bold mb-4 flex justify-center">Contactame por mail</h3>
          <a
            href="mailto:contact@nogakurumi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineAttachEmail className='text-[2rem] '/>
          </a>
        </ul>
      </div>

      {/* <!-- Redes Sociales -->
      <!-- <div>
        <ul cclassNamelass="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              <svg cclassNamelass="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.56c-.88.39-1.83.65-2.83.77a4.92 4.92 0 0 0 2.17-2.71 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.93 4.93 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.61v.06a4.93 4.93 0 0 0 3.95 4.83 4.94 4.94 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.95 13.95 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64a9.93 9.93 0 0 0 2.45-2.53z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              <svg cclassNamelass="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.34-1.6.57-2.46.68a4.92 4.92 0 0 0 2.17-2.71 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.94 13.94 0 0 1 1.64 3.16a4.93 4.93 0 0 0 1.52 6.56 4.9 4.9 0 0 1-2.23-.61v.06a4.93 4.93 0 0 0 3.95 4.83 4.94 4.94 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.9 9.9 0 0 1 0 19.54a13.95 13.95 0 0 0 7.55 2.21c9.05 0 14-7.5 14-14v-.64a9.93 9.93 0 0 0 2.45-2.53z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              <svg cclassNamelass="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.83 3.66 8.83 8.38 9.76v-6.91h-2.5v-2.85h2.5v-2.18c0-2.49 1.51-3.84 3.72-3.84 1.06 0 1.96.08 2.22.11v2.57h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.85h-2.47v6.91C18.34 20.83 22 16.83 22 12c0-5.52-4.48-10-10-10z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div> --> */}

      {/* <!-- Formulario de suscripción --> */}
      {/* <!-- <div>
          <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
          <p clclassNameass="mb-4">Recibe noticias y actualizaciones directamente en tu correo.</p>
          <form>
            <input
              type="email"
              placeholder="Tu correo electrónico"
             className class="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none"
            />
            <button clasclassNames="w-full bg-blue-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700 transition-colors">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </div> --> */}
    </div>
  </div>
</footer>

    </>
  )
}


