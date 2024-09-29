import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is Kater?',
    Svg: require('@site/static/img/agentmesh.svg').default,
    description: (
      <>
        Kater is a data analysis workflow builder. Data teams use Kater to help their stakeholders make revenue-generating decisions by telling a story with their data.
      </>
    ), 
  },
  {
    title: 'Build a Playbook',
    Svg: require('@site/static/img/playbook_sample.svg').default,
    description: (
      <>
        Define what questions to ask based on an objective. Automate weekly reports and bring software development best practices into data analysis.
      </>
    ),
  },
  {
    title: 'Start Answering',
    Svg: require('@site/static/img/get_answers.svg').default,
    description: (
      <>
        Kater is built to be personalizable, dynamic, and forgiving to non-technical users. Leverage AI to summarize and explain previously complex queries.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
