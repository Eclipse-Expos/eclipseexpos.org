import Eclipse from "../../components/Eclipse/Eclipse";
import { Button } from "eclipse-components";
import banner from "../../assets/img/banner.png";

const Landing = () => {
  return (
    <div id="landing">
      <Eclipse
        type="default"
        children={
          <div className="p-8">
            {/* <h1 className='text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] text-neutral-200 block font-bold text-center'>
              EclipseExpo
            </h1> */}
            <img src={banner} alt="EclipseExpo" className="w-4/5 mx-auto" />
            <p className="text-[0.75rem] sm:text-sm font-bold text-neutral-500 mt-4 mx-auto hidden md:block">
              The world's largest youth-led event.
            </p>
            <p className="text-[0.75rem] sm:text-sm text-neutral-500 mt-4">
              Waterloo, October 2024.
            </p>

            <Button className="mt-4 p-auto">
              <a
                href="https://lu.ma/event/evt-QLCr4PocbBACrcA"
                className="luma-checkout--button p-2 py-4"
                data-luma-action="checkout"
                data-luma-event-id="evt-QLCr4PocbBACrcA"
              >
                Register for Launch
              </a>

              <script
                id="luma-checkout"
                src="https://embed.lu.ma/checkout-button.js"
              ></script>
            </Button>

            {/*<Button
              className="mx-auto mt-4 bg-black text-neutral-200 hover:bg-neutral-200 hover:text-black"
              onClick={() => {
                window.open("https://apply.eclipseexpos.org/");
              }}
            >
              Pre-Register
            </Button>*/}
          </div>
        }
      />
    </div>
  );
};

export default Landing;
