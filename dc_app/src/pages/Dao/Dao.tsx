import {useState} from 'react';
import SwitchSelector from 'react-switch-selector';
import { Wrapper, SwitchContainer } from './Style'
import ViewDaoProposals from 'components/ViewDaoProposals/ViewDaoProposals';

const switchOptions = [
    {
        label: 'CREATE PROPOSAL',
        value: 'create',
        selectedBackgroundColor: '#01FFA5',
    },
    {
        label: 'VIEW PROPOSALS',
        value: 'view',
        selectedBackgroundColor: '#01FFA5',
    }
]

export default function Dao() {
    const [selectedFunction, setSelectedFunction] = useState<string>();
    const initialSelectedIndex = switchOptions.findIndex(({value}: any) => value === 'swap');

    const handleSwitchChange = (newValue: any) => {
        setSelectedFunction(newValue)
    }

    return (
        <Wrapper>
            <SwitchContainer>
            <SwitchSelector
                onChange={handleSwitchChange}
                options={switchOptions}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#353B3B'}
                fontColor={'white'}
                selectedFontColor={'black'}
                fontSize={18}
            />
            </SwitchContainer>
            {selectedFunction === 'view' && <ViewDaoProposals />}
        </Wrapper>
    )
}