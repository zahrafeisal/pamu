import React from "react";

const Map: React.FC = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7899915157213!2d39.66979977526679!3d-4.06318279591056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18401321f95a29df%3A0x7219e5f1e4d405cf!2sMombasa%20Trade%20Centre%20Building!5e0!3m2!1sen!2ske!4v1758726735578!5m2!1sen!2ske"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="PAMU Services Limited Location"
      />


    </section>
  );
};

export default Map;
