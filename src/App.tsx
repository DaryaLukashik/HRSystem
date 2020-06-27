import React from 'react';
import MaterialTable, { Column } from 'material-table';



interface Row {
  nameRU: string;
  nameEN: string;
  nationalIdNumber: number;
  contractStartDate: any;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

/*
 React.FC обозначает явный тип для этой функции (хранится в React FC = function component) она проверяет возвращается ли jsx разметка
*/
const App: React.FC = () => {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'Name in Russian', field: 'nameRU' },
      { title: 'Name in English', field: 'nameEN' },
      { title: 'National ID Number', field: 'nationalIdNumber', type: 'numeric' },
      {
        title: 'Contract Start Date',
        field: 'contractStartDate',
        type: ('date')
      },
    ],
    data: [
      { nameRU: 'Дарья', nameEN: 'Darya', nationalIdNumber: 86756453, contractStartDate: '15.06.2020' },
      {
        nameRU: 'Назар',
        nameEN: 'Nazar',
        nationalIdNumber: 103032,
        contractStartDate: '26.06.2020',
      },
    ],
  });

  return (
    <MaterialTable
      title="HR System v2.0"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );

}

export default App;


//______________________

 