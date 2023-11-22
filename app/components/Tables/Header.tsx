'use client'

import useRentModal from '@/app/hooks/useRentModal'
import Button from '../buttons/Button';

interface HeaderProps {
    title: string;
    button?: boolean
}

const Header: React.FC<HeaderProps> = ({
    title,
    button
}) => {
    const rentModal = useRentModal();

    return (
        <div 
            className="
                pt-8
                pb-8
                flex 
                flex-col 
                md:flex-row 
                md:justify-between
                text-center
           "
        >
            <h1
                className="
                    text-3xl 
                    font-bold 
                    mt-3 
                    mb-1 
                    text-gray-700
                "
            >
                {title}
            </h1>


            {button && <div className="w-full md:w-2/12 lg:w-1/12">
                <Button
                    type='primary'
                    onClick={rentModal.onOpen}
                    label='Add car'
                />
            </div>}
        </div>

    )
}
export default Header;