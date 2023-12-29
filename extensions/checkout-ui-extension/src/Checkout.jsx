import {
  DateField,
  InlineLayout,
  Select,
  useApi,
  useTranslate,
  reactExtension,
  useApplyAttributeChange,
} from '@shopify/ui-extensions-react/checkout';
import { useCallback, useState } from 'react';

export default reactExtension(
  'purchase.checkout.shipping-option-list.render-after',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();
  const applyAttributeChange = useApplyAttributeChange();

  const [shippingDate, setShippingDate] = useState();
  const [shippingTime, setShippingTime] = useState();

  const handleChangeDate = useCallback((shippingDate) => {
    setShippingDate(shippingDate);
    applyAttributeChange({
      type: 'updateAttribute',
      key: 'ShippingDate',
      value: shippingDate,
    });
  }, []);

  const handleChangeTime = useCallback((shippingTime) => {
    setShippingTime(shippingTime);
    applyAttributeChange({
      type: 'updateAttribute',
      key: 'ShippingTime',
      value: shippingTime,
    });
  }, []);

  return (
    <InlineLayout columns={['fill', 'fill']} spacing={'base'}>
      <DateField
        label="Shipping date"
        value={shippingDate}
        onChange={handleChangeDate}
      />
      <Select
        label="Shipping time"
        value={shippingTime}
        onChange={handleChangeTime}
        options={[
          {
            label: 'Not specific',
            value: 'Not specific',
          },
          {
            label: 'In the morning',
            value: 'In the morning',
          },
          {
            label: '12:00-14:00',
            value: '12:00-14:00',
          },
          { 
            label: '14:00-16:00', 
            value: '14:00-16:00' 
          },
          { 
            label: '16:00-18:00', 
            value: '16:00-18:00' 
          },
          { 
            label: '18:00-20:00', 
            value: '18:00-20:00' 
          },
          { 
            label: '19:00-21:00', 
            value: '19:00-21:00' 
          },
        ]}
      />
    </InlineLayout>
  );
}
