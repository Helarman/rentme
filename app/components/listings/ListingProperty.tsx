'use client'

interface ListingPropertyProps{
    property: string
    label: string
}

const ListingProperty: React.FC<ListingPropertyProps> = ({
    property,
    label
}) => {
    return(
        <div>
          <span 
            className="
              text-2xl 
              font-semibold
              text-blue-500">
            {property}
          </span>

          <span 
            className="
              text-sm 
              ml-3 
              text-gray-700"
          >
            {label}
          </span>
        </div>
    )
};

export default ListingProperty;