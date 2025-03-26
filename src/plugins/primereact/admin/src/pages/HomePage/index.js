
import React from 'react';
import { ContentLayout, HeaderLayout } from '@strapi/design-system/Layout';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Card } from '@strapi/design-system/Card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';

const HomePage = () => {
  const [selectedCities, setSelectedCities] = React.useState(null);
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  return (
    <>
      <HeaderLayout 
        title="PrimeReact Components" 
        subtitle="Example PrimeReact components for Strapi Admin"
      />
      <ContentLayout>
        <Box padding={8} background="neutral100">
          <Stack spacing={4}>
            <Typography variant="beta">Component Showcase</Typography>
            
            <Card padding={4}>
              <Stack spacing={4}>
                <Typography variant="delta">Text Input</Typography>
                <InputText placeholder="Enter text here" />
              </Stack>
            </Card>
            
            <Card padding={4}>
              <Stack spacing={4}>
                <Typography variant="delta">MultiSelect</Typography>
                <MultiSelect
                  value={selectedCities}
                  options={cities}
                  onChange={(e) => setSelectedCities(e.value)}
                  optionLabel="name"
                  placeholder="Select Cities"
                  display="chip"
                />
              </Stack>
            </Card>
            
            <Card padding={4}>
              <Stack spacing={4}>
                <Typography variant="delta">Button</Typography>
                <Button label="Click Me" icon="pi pi-check" />
              </Stack>
            </Card>
          </Stack>
        </Box>
      </ContentLayout>
    </>
  );
};

export default HomePage;
