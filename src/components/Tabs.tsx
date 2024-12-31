import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import { Bridge } from './Bridge';

export default function MyTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="bridge" title="Bridge">
          <Card>
            <CardBody>
              <Bridge />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="facet" title="Facet">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
