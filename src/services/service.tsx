import axios from 'axios';

export interface Unit {
  id: any;
  title: string;
  opened: any;
}

export async function getUnits(): Promise<Unit[]> {
  const url = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";
  try {
    const response = await axios.get(url);
    const data: Unit[] = response.data.locations;
    return data;
  } catch (error) {
    console.error('Erro ao buscar unidades:', error);
    throw error;
  }
}

export async function search(set: React.Dispatch<React.SetStateAction<Unit[]>>, search: { showUnitClosed: any }): Promise<void> {
  try {
    const base = await getUnits();
    const data = base.filter((unit) => unit.opened !== search.showUnitClosed);
    set(data);
  } catch (error) {
    console.error('Erro ao buscar unidades:', error);
    throw error;
  }
}
