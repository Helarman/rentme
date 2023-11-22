'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import {
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from "react";

import useRentModal from '@/app/hooks/useRentModal';

import Modal from "./Modal";
import Counter from "../inputs/Counter";;
import CategoryInput from '../inputs/CategoryInput';
import { categories } from '../navigation/Categories';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import Heading from '../Heading';
import CarSelect, { CarSelectValue } from '../inputs/selects/CarSelect';
import Select, { SelectValue } from '../inputs/selects/Select';

enum STEPS {
  CATEGORY = 0,
  INFO1 = 1,
  INFO2 = 2,
  INFO3 = 3,
  IMAGES = 4,
  PRICE = 5,
}

const gearBoxOptions = [
  { value: "MT", label: "MT", },
  { value: "AT", label: "AT" },
  { value: "CVT", label: "CVT" },
  { value: "DCT", label: "DCT" },
];

const engineOptions = [
  { value: "gasoline", label: "gasoline", },
  { value: "diesel", label: "diesel" },
  { value: "CNG", label: "CNG" },
  { value: "LPG", label: "LPG" },
  { value: "electric", label: "electric" },
];

const drivetrainOptions = [
  { value: "FWD", label: "FWD", },
  { value: "RWD", label: "RWD" },
  { value: "AWD", label: "AWD" },
];

const RentModal = () => {


  const router = useRouter();
  const rentModal = useRentModal();

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
      engineType: null,
      gearboxType: null,
      drivetrainType: null,
      car: null
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
  const car = watch('car');
  const gearboxType = watch('gearboxType');
  const engineType = watch('engineType');
  const drivetrainType = watch('drivetrainType')


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
          title="Car info - select"
          subtitle="Technical information"
        />
        <CarSelect
          value={car}
          onChange={(value) => setCustomValue('car', value)} />
        <Select
          placeholder='Select engine'
          options={engineOptions}
          value={engineType}
          onChange={(value) => setCustomValue('engineType', value)} />
        <Select
          placeholder='Select gearbox'
          options={gearBoxOptions}
          value={gearboxType}
          onChange={(value) => setCustomValue('gearboxType', value)} />
        <Select
          placeholder='Select drivetrain'
          options={drivetrainOptions}
          value={drivetrainType}
          onChange={(value) => setCustomValue('drivetrainType', value)} />
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
          formatPrice
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

export default RentModal;
