interface KeynoteSpeakerProps {
  name: string;
  designation: string;
  company?: string;
  profilePic?: string;
}

const KeynoteSpeakerCard: React.FC<KeynoteSpeakerProps> = ({
  name,
  designation,
  company,
  profilePic,
}) => {
  return (
    <div className="bg-white rounded-xl border hover:shadow-xl shadow-sm transition-all duration-300 p-6 flex flex-col items-center text-center">
      
      {/* Image */}
      <div className="w-36 h-36 rounded-full overflow-hidden shadow-md bg-gray-100 mb-4">
        {profilePic ? (
          <img
            src={profilePic}
            alt={name}
            className="w-full h-full object-cover "
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

      {/* Designation */}
      <p className="text-gray-700 mt-1">{designation}</p>

      {/* Company */}
      {company && (
        <p className="text-gray-600 text-sm mt-1">{company}</p>
      )}
    </div>
  );
};

export default KeynoteSpeakerCard;
