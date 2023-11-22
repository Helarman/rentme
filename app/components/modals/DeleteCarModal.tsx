'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from 'react-hook-form';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import {useState } from "react";

import useDeleteCarModal from '@/app/hooks/useDeleteCarModal';

import Modal from "./Modal";

import Heading from '../Heading';

const DeleteCarModal = () => {

  const router = useRouter();
  const deleteCarModal = useDeleteCarModal();

  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      seatsCount: 1,
      bagsCount: 1,
      powerCount: 1,
      tankCount: 1,
      fuelCount: 1,
      doorsCount: 1,
      gearboxCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }
  });


  const onSubmit: SubmitHandler<FieldValues> = () => {

    setIsLoading(true);

    axios.delete(`/api/listings/id}`)
    .then(() => {
      toast.success('Car deleted!');
      router.refresh();
      deleteCarModal.onClose();
    })
    .catch(() => {
      toast.error('Error');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Сar deletion"
        subtitle="Are you sure? This action is irreversible!"
      />
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={deleteCarModal.isOpen}
      title="Delete car"
      actionLabel={'Delete'}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={'Cancel'}
      secondaryAction={deleteCarModal.onClose}
      onClose={deleteCarModal.onClose}
      body={bodyContent}
    />
  );
}

export default DeleteCarModal;
