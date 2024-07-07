import { GrFacebookOption, GrLinkedin, GrTwitter } from "react-icons/gr";
import Container from "../../components/ui/Container";

const Footer = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-between gap-10">
        {/* Logo and Company Info */}
        <div className="w-full sm:w-auto">
          <h1 className="text-xl font-semibold mb-2">Clean Co.</h1>
          <p className="max-w-[35ch] font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            nostrum quibusdam labore quod aliquid harum omnis excepturi id,
            accusantium pariatur iste.
          </p>
          <div className="flex gap-5 text-3xl text-primary mt-10">
            <GrFacebookOption className="cursor-pointer" />
            <GrLinkedin className="cursor-pointer" />
            <GrTwitter className="cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="w-full sm:w-auto mt-6 sm:mt-0">
          <h1 className="text-xl font-bold mb-2">Navigations</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">FAQs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Terms & Conditions
            </p>
          </div>
        </div>

        {/* Company Links */}
        <div className="w-full sm:w-auto mt-6 sm:mt-0">
          <h1 className="text-xl font-bold mb-2">Company</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">About</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">Team</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Contact
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="w-full sm:w-auto mt-6 sm:mt-0">
          <h1 className="text-xl font-bold mb-2">Contact Information</h1>
          <p className="font-medium">Mohakhali, Dhaka 1212.</p>
          <p className="font-medium">+019 123 456 78</p>
          <p className="font-medium">info@cleanco.com</p>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="divider mt-6"></div>
      <p className="mt-6 mb-10 text-center sm:text-left">
        Copyright © 2024 BDC | Powered by BDC.
      </p>
    </Container>
  );
};

export default Footer;
