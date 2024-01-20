import test from 'ava';
import { SinonSandbox, SinonSpy } from 'sinon';
import dayjs from 'dayjs';
import { DateUtils } from './DateUtils';
import sinon from 'sinon';

let sandbox: SinonSandbox = null as unknown as SinonSandbox;
const spy = {
  format: null as unknown as SinonSpy,
};

test.beforeEach(() => {
  // dayjs関数とformatメソッドをスパイ
  sandbox = sinon.createSandbox();
  if (spy.format !== null) return;
  spy.format = sandbox.spy(dayjs.prototype, 'format');
});

test.afterEach(() => {
  // スパイをリセット
  sandbox.restore();
});

test('should pass the correct template to dayjs format method', (t) => {
  const value = '2021-01-01T00:00:00.000Z';
  const template = 'YY-MM-DD HH:mm';

  DateUtils.format(value, template);

  // formatメソッドが正しいテンプレートで呼ばれたことを確認
  t.true(spy.format.calledWithExactly(template));
});

test('should use the default template if no template is provided', (t) => {
  const value = '2021-01-01T00:00:00.000Z';
  const defaultTemplate = 'YY/MM/DD/HH:mm';

  DateUtils.format(value);

  // formatメソッドがデフォルトのテンプレートで呼ばれたことを確認
  t.true(spy.format.calledWithExactly(defaultTemplate));
});
