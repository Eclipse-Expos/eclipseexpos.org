import Eclipse from '../../components/Eclipse/Eclipse';
import { Button } from 'eclipse-components';

const Landing = () => {
  return (
    <div id='landing'>
      <Eclipse
        type='default'
        children={
          <div className='p-8'>
            <h1 className='text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] text-neutral-200 block font-bold text-center'>
              Eclipse2024
            </h1>
            <p className='text-[0.75rem] sm:text-sm text-neutral-500 mt-4 mx-auto hidden md:block'>
              The world's largest youth-led event.
            </p>
            <p className='text-[0.75rem] sm:text-sm font-bold text-neutral-500 mt-4'>
              Let's break some records.
            </p>
            <Button
              className='mx-auto mt-4 bg-black text-neutral-200 hover:bg-neutral-200 hover:text-black'
              onClick={() => {
                window.open('https://apply.eclipseexpos.org/');
              }}
            >
              Pre-Register
            </Button>
          </div>
        }
      />
    </div>
  );
};

export default Landing;
