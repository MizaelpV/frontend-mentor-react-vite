export interface dataType {
  labels: string[];
  datasets: [
    {
      data: number[];
      backgroundColor: () => string[];
    }
  ];
}
