import React from "react";

const Map = () => {
  return (
    <>
      <section id="map">
        <div className="container-fluid map-inner">
          <div className="row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2861865821565!2d-88.20724172410384!3d41.71434297126012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef7a1c440944b%3A0x8a207400f13acfc9!2sChawla%20%26%20Associates%2C%20CPAs!5e0!3m2!1sen!2sin!4v1733299238875!5m2!1sen!2sin"
              height="400"
              width="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
