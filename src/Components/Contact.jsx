
function Contact() {
  return (
   <div class="flex flex-wrap justify-center items-center h-auto p-5 pl-[6%] pt-[9%]">
        <div class="w-full md:w-2/5 p-4">
          <h2 class="text-xl md:text-7xl font-semibold mb-5">GET IN TOUCH!</h2>
          <form class="space-y-4">
            <div>
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' class="mt-1 p-4 w-full border border-gray-400 rounded-md" />
            </div>
            <div>
              <input type="email" id="email" name="email" placeholder='Email' class="mt-1 p-4 w-full border border-gray-400 rounded-md" />
            </div>
            <div>
              <textarea id="message" name="message" placeholder='Message' class="mt-1 p-4 w-full border border-gray-400 rounded-md" rows="4"></textarea>
            </div>
            <button type="submit" class="px-8 py-4 bg-purple-600 text-white hover:bg-purple-700 rounded-md">Submit</button>
          </form>
        </div>
        <div class="w-full md:w-1/2 p-4 flex justify-center">
          <div class="rounded-full overflow-hidden w-[35rem] h-[35rem]">
            <iframe
              class="w-[35rem] h-[35rem]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d-74.25986568785095!3d40.697670063849574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUxLjYiTiA3NMKwMTUnMzUuNyJX!5e0!3m2!1sen!2sus!4v1652901957916"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
  )
}

export default Contact