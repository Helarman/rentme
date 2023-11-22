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
import { useMemo, useState } from "react";

import RentModalModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";
import Counter from "../inputs/Counter";
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navigation/Categories';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';
import CarSelect, {CarSelectValue} from '../inputs/selects/CarSelect';

enum STEPS {
  CATEGORY = 0,
  INFO1 = 1,
  INFO2 = 2,
  INFO3 = 3,
  IMAGES = 4,
  DESCRIPTION = 5,
  PRICE = 6,
}

const RentModal = () => {

  const router = useRouter();
  const rentModal = RentModalModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

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
      engineType: '',
    }
  });

  const category = watch('category');
  const seatsCount = watch('seatsCount');
  const bagsCount = watch('bagsCount');
  const powerCount = watch('powerCount');
  const fuelCount = watch('fuelCount');
  const tankCount = watch('tankCount');
  const doorsCount = watch('doorsCount');
  const gearboxCount = watch('gearboxCount');
  const imageSrc = watch('imageSrc');
  
  const [car, setCar] = useState<CarSelectValue>();

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    })
  }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios.post('/api/listings', data)
      .then(() => {
        toast.success('Car added!');
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY)
        rentModal.onClose();
      })
      .catch(() => {
        toast.error('Error');
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return 'Create'
    }

    return 'Next'
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined
    }

    return 'Back'
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Category"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) =>
                setCustomValue('category', category)}
              selected={category === item.label}
              label={item.label}
            />
          </div>
        ))}
      </div>
    </div>
  )
  if (step === STEPS.INFO1) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Car info - technical 1"
          subtitle="Technical information"
        />
        {car?.value}
        <CarSelect
          value={car}
          onChange={(value) => { setCar(value as CarSelectValue) }} />
      </div>
    )
  }

  if (step === STEPS.INFO2) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Car info - technical in numbers"
          subtitle="Technical information in numbers"
        />
        <Counter
          onChange={(value) => setCustomValue('powerCount', value)}
          value={powerCount}
          title="Power"
          subtitle="Engine power in horsepower"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('gearboxCount', value)}
          value={gearboxCount}
          title="Gears"
          subtitle="Number ofgears"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('fuelCount', value)}
          value={fuelCount}
          title="Fuel consumption"
          subtitle="Fuel consumption per 100km"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('tankCount', value)}
          value={tankCount}
          title="Fuel tank size"
          subtitle="Fuel tank size in liters"
        />
      </div>
    )
  }
  if (step === STEPS.INFO3) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Car info - passenger "
          subtitle="Passenger information in numbers"
        />
        <Counter
          onChange={(value) => setCustomValue('doorsCount', value)}
          value={doorsCount}
          title="Doors"
          subtitle="Number of doors"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('seatsCount', value)}
          value={seatsCount}
          title="Seats"
          subtitle="Number of seats"
        />
        <hr />
        <Counter
          onChange={(value) => setCustomValue('bagsCount', value)}
          value={bagsCount}
          title="Bags"
          subtitle="Number of places for bags"
        />
      </div>
    )
  }

  if (step === STEPS.IMAGES) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Add a photo of car"
          subtitle=""
        />
        <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
      </div>
    )
  }

  if (step === STEPS.DESCRIPTION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="How would you describe your car?"
          subtitle="Some words about car"
        />
        <Input
          id="title"
          label="title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <hr />
        <Input
          id="description"
          label="description"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  if (step === STEPS.PRICE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    )
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Add new car"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
}

export default RentModalModal;
