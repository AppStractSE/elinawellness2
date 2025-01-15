interface Props {
  topText: string;
  middleText: string;
  bottomText: string;
}
const SmallInfoCard = ({ topText, middleText, bottomText }: Props) => {
  return (
    <div className="bg-background/10 flex flex-col gap-8 rounded-md border p-4 shadow">
      <p className="text-base font-medium md:text-lg">{topText}</p>
      <p className="text-4xl font-semibold md:text-5xl">{middleText}</p>
      <p>{bottomText}</p>
    </div>
  );
};

export default SmallInfoCard;
