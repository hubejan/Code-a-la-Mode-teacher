import * as actions from '../../app/actions/tickets-actions';

const testTicket = {
  id: 1,
  question: 'Is this test passing?'
};

// snapshot test workflow:
// first time a test with .toMatchSnapshot() is run, a literal copy
// of that function/test's output is saved as a snapshot.
// the next time the test is run, a diff is run against the snapshot
// if they do not match, an error is thrown and you are prompted to
// either update the snapshot, or change your code to match the old snapshot

// take a look at './__snapshots__/tickets-actions.spec.js.snap' to see
// the snapshot these created actions
describe('action creators', () => {
  it('should create an addAction', () => {
    expect(actions.add(testTicket)).toMatchSnapshot();
  });

  it('should create a selectAction', () => {
    expect(actions.select(testTicket)).toMatchSnapshot();
  });

  it('should create a removeAction', () => {
    expect(actions.remove(testTicket)).toMatchSnapshot();
  });
});
