import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { FacetForm } from '@/components/form/FacetForm';
import { SwapForm } from '@/components/form/SwapForm';

import { RedeemForm } from './form/RedeemForm';
import { Wrapper } from './Wrapper';

export default function MyTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary" size="lg">
        <Tab key="bridge" title="Swap">
          <Card>
            <CardBody>
              <Wrapper>
                <SwapForm />
              </Wrapper>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="facet" title="Facet">
          <Card>
            <CardBody>
              <Wrapper>
                <FacetForm />
              </Wrapper>
            </CardBody>
          </Card>
        </Tab>
        <Tab key="redeem" title="Redeem">
          <Card>
            <CardBody>
              {' '}
              <Wrapper>
                <RedeemForm />
              </Wrapper>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
