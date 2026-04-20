interface InvitedSpeakerProps {
  name: string;
  designation?: string;
  company: string;
  experience: string;
  email: string;
  conferenceLink: string;
  titleOfTalk: string;
  abstract: string;
  profilePic?: string;
  country: string;
  city: string;
}

const InvitedSpeakerCard: React.FC<InvitedSpeakerProps> = ({
  name,
  designation,
  company,
  experience,
  email,
  conferenceLink,
  titleOfTalk,
  abstract,
  profilePic,
  country,
  city,
}) => {
  return (
    <div className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        
        {/* Profile Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden shadow bg-gray-100 flex-shrink-0">
          {profilePic ? (
            <img
              src={profilePic}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* Basic Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-700 mt-1">{designation}</p>
          <p className="text-gray-600 text-sm">{company}</p>

          <div className="mt-3 text-sm text-gray-600 space-y-1">
            {/* <p><strong>Experience:</strong> {experience}</p>
            <p><strong>Location:</strong> {city}, {country}</p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline"
              >
                {email}
              </a>
            </p>
            <p>
              <strong>Conference:</strong>{" "}
              <a
                href={conferenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </p> */}
          </div>
        </div>
      </div>

      {/* Talk Details */}
      {/* <div className="mt-6">
        <h4 className="text-lg font-semibold text-gray-900">
          Title of the Talk
        </h4>
        <p className="text-gray-800 mt-1">{titleOfTalk}</p>

        <h4 className="text-lg font-semibold text-gray-900 mt-4">
          Abstract
        </h4>
        <p className="text-gray-700 mt-2 leading-relaxed text-sm">
          {abstract}
        </p>
      </div> */}
    </div>
  );
};

export default InvitedSpeakerCard;