import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { FacetForm } from '@/components/form/FacetForm';
import { SwapForm } from '@/components/form/SwapForm';

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
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
