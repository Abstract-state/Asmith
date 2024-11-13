import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: "N. K Pandey",
      role: "Physics/Research Scholar/EToC/ToI/Mentor",
      text: "Asmith is a very determined student. His progress in academics and extracurricular activities are praiseworthy. He has also done excellent in Summer Tinkerpreneur BootCamp-21 and attended master sessions for refining his product. I have seen so many good qualities in him. He is cool, calm, determined, simple, humble, and sincere. Looking forward to his grand success in each and every field of life."
    },
    {
      name: "Prem Prakash",
      role: "RIMC/NDA/IMA/Army/Director/MBA Finance/MA English/B.Ed/B.Sc/Soft Skills",
      text: "Asmith has been a bright and conscientious student whose forte has been science projects. He comes across as a brilliant brain and of high caliber. He is outstanding on social-emotional skills also and has appreciable interpersonal communication. He has done our school and his Alma Mater, Radiant International School, Patna, proud always. I wish him all the best for a great innings ahead and a great future in all his endeavors. Best wishes."
    }
  ];

  return (
    <section id="testimonials" className="px-8 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.text}"</p>
              <div className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
