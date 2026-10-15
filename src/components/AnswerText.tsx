export default function AnswerText({ text }: { text: string }) {
  const lines = text.split('\n').filter((l) => l.trim());
  const bullets = lines.filter((l) => l.trim().startsWith('•'));
  const others = lines.filter((l) => !l.trim().startsWith('•'));
  return (
    <>
      {others.map((l, i) => (
        <p key={`p${i}`}>{l}</p>
      ))}
      {bullets.length > 0 && (
        <ul>
          {bullets.map((l, i) => (
            <li key={`b${i}`}>{l.replace(/^\s*•\s*/, '')}</li>
          ))}
        </ul>
      )}
    </>
  );
}
