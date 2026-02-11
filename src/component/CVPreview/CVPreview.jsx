export default function CVPreview() {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-100 p-8 font-sans">
      <div className="flex w-[210mm] min-h-[297mm] bg-white shadow-xl overflow-hidden">
        
        <div className="w-[35%] bg-slate-700 text-white p-8 flex flex-col gap-8">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-600">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-white pb-2 mb-4">Contact</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-slate-300">123-456-7890</p>
              </div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-slate-300 break-words">hello@reallygreatsite.com</p>
              </div>
              <div>
                <p className="font-bold">Address</p>
                <p className="text-slate-300">123 Anywhere St, Any City</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-white pb-2 mb-4">Expertise</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Management Skills</li>
              <li>Creativity</li>
              <li>Digital Marketing</li>
              <li>Negotiation</li>
              <li>Critical Thinking</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-white pb-2 mb-4">Language</h2>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Spanish</li>
              <li>Arabic</li>
              <li>English</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider border-b-2 border-white pb-2 mb-4">Awards</h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-bold text-slate-200">Oct 2019 | Ingoude Company</p>
                <p className="font-bold">The Best Employee of the Year</p>
              </div>
              <div>
                <p className="font-bold text-slate-200">May 2015 | Timmerman Industries</p>
                <p className="font-bold">The Best Employee of the Year</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[65%] p-10 flex flex-col gap-8 text-slate-800">
          <div className="mb-4">
            <h1 className="text-5xl font-bold text-slate-800 mb-2">Isabel Mercado</h1>
            <p className="text-xl text-slate-500 tracking-wide">Marketing Manager</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-2 border-slate-800 pb-2 mb-6">Experience</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-1/3">
                  <p className="font-bold text-slate-600">2020 – 2023</p>
                  <p className="text-slate-500 text-sm">Arowwai Industries</p>
                </div>
                <div className="w-2/3">
                  <h3 className="font-bold text-lg mb-1">Product Design Manager</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-1/3">
                  <p className="font-bold text-slate-600">2019 - 2020</p>
                  <p className="text-slate-500 text-sm">Ingoude Company</p>
                </div>
                <div className="w-2/3">
                  <h3 className="font-bold text-lg mb-1">Product Design Manager</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-1/3">
                  <p className="font-bold text-slate-600">2017- 2019</p>
                  <p className="text-slate-500 text-sm">Timmerman Industries</p>
                </div>
                <div className="w-2/3">
                  <h3 className="font-bold text-lg mb-1">Product Design Manager</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-2 border-slate-800 pb-2 mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="w-1/3">
                  <p className="font-bold text-slate-600">2020 - 2023</p>
                  <p className="text-slate-500 text-sm">Wardiere University</p>
                </div>
                <div className="w-2/3">
                  <h3 className="font-bold text-lg mb-1">Bachelor of Business Management</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-1/3">
                  <p className="font-bold text-slate-600">2016 - 2020</p>
                  <p className="text-slate-500 text-sm">Wardiere University</p>
                </div>
                <div className="w-2/3">
                  <h3 className="font-bold text-lg mb-1">Bachelor of Business Management</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-1/3">
                  <p className="font-bold text-slate-600">2012 - 2016</p>
                  <p className="text-slate-500 text-sm">Wardiere University</p>
                </div>
                <div className="w-2/3">
                  <h3 className="font-bold text-lg mb-1">Bachelor of Business Management</h3>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet sem nec risus egestas accumsan. In enim nunc, tincidunt ut quam eget, luctus sollicitudin neque.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wider border-b-2 border-slate-800 pb-2 mb-6">References</h2>
            <div className="flex gap-8">
              <div className="w-1/2">
                <h3 className="font-bold text-lg">Harumi Kobayashi</h3>
                <p className="text-sm text-slate-600 mb-2">Wardiere Inc. / CEO</p>
                <p className="text-sm text-slate-600"><span className="font-bold">Phone:</span> 123-456-7890</p>
                <p className="text-sm text-slate-600"><span className="font-bold">Email:</span> hello@reallygreatsite.com</p>
              </div>
              <div className="w-1/2">
                <h3 className="font-bold text-lg">Bailey Dupont</h3>
                <p className="text-sm text-slate-600 mb-2">Wardiere Inc. / CEO</p>
                <p className="text-sm text-slate-600"><span className="font-bold">Phone:</span> 123-456-7890</p>
                <p className="text-sm text-slate-600"><span className="font-bold">Email:</span> hello@reallygreatsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}