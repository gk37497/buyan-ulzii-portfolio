import Layout from '@/components/common/Layout';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';
import { TitledBox } from '@/components/ui/TitledBox';

function CareerItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <li className="border-b border-b-accent-2 py-4">
      <Text>
        <p className="font-bold">{title}</p>
      </Text>
      <p className="-mt-2 text-accent-5">{description}</p>
    </li>
  );
}

export default function Index() {
  return (
    <Page title="About">
      <div>
        <Text>
          I am 19, middle male child of the family, my hobbies are playing
          guitar and listening to music
        </Text>
        <TitledBox title="Academic">
          In the first semester of the first year I took 6 classes and hold a
          gpa of 3.4. Now I am taking 5 classes and participating the english
          speaking club of my university. As an extracurricular activity I do
          some volunteer works in an organisation called Uncage and acquired
          some certifications.
        </TitledBox>
        <TitledBox title="Skills">
          <ul>
            <CareerItem title="- English, B2 level" description="" />
            <CareerItem
              title="- Computer skill Excel, powerpoint, photoshop"
              description=""
            />
            <CareerItem
              title="- Commucation skill and problem-solving ability"
              description=""
            />
          </ul>
        </TitledBox>
        <TitledBox title="Job Experiences">
          <ul>
            <li>
              - 2 months of working as a trainee teacher in an language centre
            </li>
            <li>- 3 months of working in a non-profit organisation `Uncage`</li>
          </ul>
        </TitledBox>
      </div>
    </Page>
  );
}

Index.Layout = Layout;
