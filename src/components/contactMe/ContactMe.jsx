import { MdOutlineAttachEmail } from "react-icons/md";
export const ContactMe = () => {
  return (
    <>

      <footer id='contacto' className="backgroundBlue anotherBlueDark text-gray-200 py-[3rem]  sm:h-[15vh] ">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 ">

          <ul className='flex justify-center gap-6 items-center'>
            <h3 class="text-[1.5rem] font-bold flex justify-center ">Contactame por mail</h3>
            <a
              href="mailto:@nogakurumi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlineAttachEmail className='text-[2rem] ' />
            </a>
          </ul>

        </div>
      </footer>

    </>
  )
}


