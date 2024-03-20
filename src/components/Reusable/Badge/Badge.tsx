import './Badge.scss';

interface BadgeProps {
  channel: string;
}
const Badge: React.FC<BadgeProps> = ({ channel = "Website" }) => {
  const formattedChannel = channel.charAt(0).toUpperCase() + channel.substring(1).toLowerCase();
  return (
    <p className='badge'>{formattedChannel}</p>
  );
}

export default Badge;