import { Container } from '~/components/Container';
import ContentCardView, { ContentCard } from '~/components/ContentCard';
import Empty from '~/components/Empty';
import Boulder from '~/components/icons/Boulder';

// const testBinder: ContentCard = {
//   id: 1,
//   title: 'Black Rares',
// };

const cards: ContentCard[] = [];

export default function Home() {
  return (
    <Container>
      {!cards.length ? (
        <Empty
          Icon={Boulder}
          message="Click the button below to create your first binder!"
          title="No binders found."
          buttonText="Create a Binder"
          buttonRoute="modal-create-binder"
        />
      ) : (
        cards.map((data) => <ContentCardView key={data.id} data={data} />)
      )}
    </Container>
  );
}
