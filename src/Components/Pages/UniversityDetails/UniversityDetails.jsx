import AdmissionDate from "./AdmissionDate";
import Details from "./details";
import TopCourses from "./TopCourses";
import UniversityRanking from "./UniversityRanking";


const UniversityDetails = () => {
  return (
    <div className="mx-20px">
      <Details></Details>
     <div className="w-1/2 pl-24">
       <TopCourses></TopCourses>
      <AdmissionDate></AdmissionDate>
      <UniversityDetails></UniversityDetails>
     
     </div>

    </div>
  );
};

export default UniversityDetails;