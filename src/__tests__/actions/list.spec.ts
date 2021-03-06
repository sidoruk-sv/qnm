import listAction from '../../actions/list';
import { resolveWorkspace } from '../utils';

describe('list', () => {
  it('should list the versions of mixed modules', () => {
    const workspace = resolveWorkspace('mix-modules');
    const output = listAction(workspace);

    expect(output).toMatchSnapshot();
  });

  it('should disable colors', () => {
    const workspace = resolveWorkspace('mix-modules');
    const output = listAction(workspace, {
      noColor: true,
    });

    expect(output).toMatchSnapshot();
  });
});
