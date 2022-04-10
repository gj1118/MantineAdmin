type Props = {
  value?: number
}

export default function Progress({ value }: Props) {
  return (
    <div className="circular">
      <div className="inner"></div>
      <div className="number">100</div>
      <div className="circle">
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  )
}
