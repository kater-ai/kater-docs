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
    Svg: require('@site/static/img/Prep.svg').default,
    description: (
      <>
        Kater is the data agent that gets better the more you use it. It surfaces insights previously limited by the scope of specialized data teams.
      </>
    ), 
  },
  {
    title: 'Prepare your Semantic Layer',
    Svg: require('@site/static/img/Categorize.svg').default,
    description: (
      <>
        Kater helps data teams prepare, categorize, and define their semantics and business logic to prepare their data for LLM understanding. 
      </>
    ),
  },
  {
    title: 'Start Asking',
    Svg: require('@site/static/img/Ask.svg').default,
    description: (
      <>
        Cultivate curiosity and ask questions about your data. Kater will help you understand and interpret the answers.
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
