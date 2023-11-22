'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
  center
}) => {
  return ( 
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold text-gray-700">
        {title}
      </div>
      <div className="font-light text-gray-500 mt-2">
        {subtitle}
      </div>
    </div>
   );
}
 
export default Heading;