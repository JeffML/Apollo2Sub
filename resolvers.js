import { PubSub } from 'apollo-server-express';
const pubsub = new PubSub();

const TOPIC = 'infoTopic';

const infos = ['info1', 'info2', 'info3', 'done']

const publish = () => {
    setTimeout( () =>
    infos.forEach(info => pubsub.publish(TOPIC, {info})), 1000)
}

export default {
    Query: {
      go: () => { publish(); return 'going'}
    },
  
    Subscription: {
      info: {
        subscribe: () => pubsub.asyncIterator([TOPIC]),
      },
    },
  };