import { Button } from 'eclipse-components';

const CTA = () => {
  return (
    <div className='bg-bg' id='message'>
      <div className='typography'>
        <h2>
          Write your story at{' '}
          <span className='font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent'>
            EclipseExpo
          </span>
        </h2>
        <p className='mt-4'>
          Today's youth are tomorrow's leaders. Tomorrow is coming faster than
          we realize; we need to invest in our youth today.
          <br />
          <br />
          EclipseExpo is designed to give youth the chance to invest in the
          future, by giving them the platform to showcase and grow their
          leadership capabilities. By uniting the next generation, we're
          ensuring our impact is made across the globe by youth, on a larger
          scale than ever before.
          <br />
          <br />
          Let's make tomorrow start here.
        </p>
        <Button
          onClick={() => window.open('https://apply.eclipseexpos.org/')}
          className='mt-8'
        >
          Pre-Register
        </Button>
      </div>
    </div>
  );
};

export default CTA;
