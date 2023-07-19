import React from "react";

import SectionTitle from "../Components/SectionTitle";
import ListItem from "../Components/ListItem";
import ViewMore from "../Components/ViewMore";

import { certificationData } from "../Data/CertificationsData";

const Certifications = () => {
  return (
    <div>
      <SectionTitle sectionTitle="Certifications" />
      {certificationData.map((cert, key) => {
        return (
          <ListItem
            key={key}
            heading={cert.title}
            subHeading={cert.issuedBy}
            imgLink={cert.image}
          />
        );
      })}

      <ViewMore />
    </div>
  );
};

export default Certifications;
