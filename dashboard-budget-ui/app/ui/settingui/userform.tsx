
import { Button, NumberInput, TextInput } from '@tremor/react';

export default function UserForm() {
  return (
    <section className='flex gap-7 flex-col sm:flex-row w-full'>
      <div className='w-3/6'>
        <h3 className='text-lg font-bold'>Personal information</h3>
        <h6 className='text-sm font-light'>Manage your personal information and role.</h6>
      </div>
      <form className='w-full flex gap-5 flex-col items-end'>
        <div className='flex gap-7 flex-col sm:flex-row w-full'>
          <div className='w-full flex gap-2 flex-col'>
            <p className='text-sm font-semibold'>First name</p>
            <TextInput className='w-full' placeholder='Andrew' />
          </div>
          <div className='w-full flex gap-2 flex-col'>
            <p className='text-sm font-semibold'>Last name</p>
            <TextInput className='w-full' placeholder='Stone' />
          </div>
        </div>
        <div className='w-full flex gap-2 flex-col'>
          <p className='text-sm font-semibold'>Email</p>
          <TextInput className='w-full' placeholder='andrews@test.com' type='email' />
        </div>
        <div className='flex gap-7 flex-col sm:flex-row w-full'>
          <div className='w-full flex gap-2 flex-col'>
            <p className='text-sm font-semibold'>Mobile phone</p>
            <NumberInput enableStepper={false} placeholder='1908908765' max={12} />
          </div>
          <div className='w-full flex gap-2 flex-col'>
            <p className='text-sm font-semibold'>Age</p>
            <NumberInput enableStepper={false} placeholder='25' max={12} />
          </div>
        </div>
        <div className='flex gap-7 flex-col sm:flex-row w-full'>
          <div className='w-full flex gap-2 flex-col'>
            <p className='text-sm font-semibold'>Country</p>
            <TextInput className='w-full' placeholder='Spain' />
          </div>
          <div className='w-full flex gap-2 flex-col'>
            <p className='text-sm font-semibold'>City</p>
            <TextInput className='w-full' placeholder='Madrid' />
          </div>
        </div>
        <div className='w-full flex gap-2 flex-col'>
          <p className='text-sm font-semibold'>Address</p>
          <TextInput className='w-full' placeholder='Av. Leon Street 3' />
        </div>
        <Button className='w-32 mt-12' variant="primary">Save changes</Button>
      </form>
    </section>
  )
}