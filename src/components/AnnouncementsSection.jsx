import React from 'react';

const announcement = [
  { id: 1, date: '2023-10-01', text: 'Welcome to the new semester!' },
  { id: 2, date: '2023-10-05', text: 'Midterm exams start next week.' },
  { id: 3, date: '2023-10-10', text: 'Guest lecture on AI at 3 PM.' },
  { id: 4, date: '2023-10-15', text: 'Career fair on campus.' },
];

const Announcements = () => {
  return (
    <div className="flex w-full h-90 flex-rows mx-auto p-6 bg-blue-200 rounded-lg shadow-md overflow-hidden border-x-4 border-indigo-500">
      <div
      className='w-full bg-blue-200  overflow-hidden'>
        
      <h2 className="text-2xl w-full font-bold mb-4 text-center text-3xl underline">College Announcements</h2>
      <div
     className=' w-full bg-blue-200  flex flex-rows overflow-hidden'>
      <div className="mb-6 w-90 rounded-xl px-3 bg-blue-100 mx-5 overflow-auto ">
        {announcement.map((announcement) => (
          <div key={announcement.id} className="border-b border-gray-200  py-2">
            <span className="font-semibold text-blue-600">{announcement.date}</span>
            <p className="text-gray-700">{announcement.text}</p>
          </div>
        ))}
        
      </div>
      <div className="mb-6 w-90 bg-red-100 px-3 rounded-xl mx-2 overflow-auto ">
  {announcement.map((announcement) => (
    <div key={announcement.id} className="border-b border-gray-200  py-2">
      <span className="font-semibold text-blue-600">{announcement.date}</span>
      <p className="text-gray-700">{announcement.text}</p>
    </div>
  ))}
  </div>
  
</div>
      </div>
      
      <div
      className='bg-green-100 w-120 text-3xl rounded-2xl text-center'>Calender

      </div>
    </div>
  );
};

export default Announcements;