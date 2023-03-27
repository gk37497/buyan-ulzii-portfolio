import Layout from '@/components/common/Layout';
import { Anchor } from '@/components/ui/Anchor';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

export default function Index() {
  return (
    <Page title="Hello, I'm Buyan-Ulzii">
      <div className="flex flex-col md:flex-row">
        <div className="mt-2 w-full space-y-5">
          <Text>
            I am a freshmen of University of Finance and Economics in Mongolia
            and majoring in economics. I love being part of a team and working
            on a project.
          </Text>
          <Text>
            For my spare time, I enjoy listening a music and hanging out with my
            friends. I have a wide academic knowledge and soft skills that
            distinguishes me from my peers.
          </Text>
          <Anchor text="More about me ..." url="/about" />
        </div>
        <div className="mt-5 h-52 w-full p-0 md:mt-0">
          <img
            src="/me.png"
            alt="mex"
            className="h-full w-full scale-90 rounded-lg object-cover"
          />
        </div>
      </div>
    </Page>
  );
}

Index.Layout = Layout;
