// IMPORTS
import { Card } from "@/components/ui/card";
import Image from "next/image";

// COMPONENT
export default function BlogPage() {
  return (
    <>
      <div className="mb-8">
        <p>Find all my posts</p>
      </div>
      <div className="grid grid-cols-12 gap-4 xl:gap-6 2xl:gap-8">
        <Card className="col-span-12 lg:col-span-6 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
        <Card className="col-span-12 lg:col-span-6 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
        <Card className="col-span-12 md:col-span-6 xl:col-span-4 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
        <Card className="col-span-12 md:col-span-6 xl:col-span-4 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
      </div>
      <div className="grid grid-cols-12 gap-4 xl:gap-6 2xl:gap-8 mt-8">
        <Card className="col-span-12 lg:col-span-6 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
        <Card className="col-span-12 lg:col-span-6 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
        <Card className="col-span-12 md:col-span-6 xl:col-span-4 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
        <Card className="col-span-12 md:col-span-6 xl:col-span-4 min-h-50 items-center justify-center">
          <Image src="/assets/avatar.jpg" alt="" width={100} height={100} />
        </Card>
      </div>
    </>
  );
}
