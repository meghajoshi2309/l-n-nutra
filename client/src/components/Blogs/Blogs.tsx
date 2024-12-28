import styled from "styled-components";

// Types
interface BlogPost {
  id: number;
  headline: string;
  date: string;
  commentsCount: number;
  imageUrl: string;
}

// Styled Components
const BlogContainer = styled.div`
  background-color: #000000;
  padding: 4rem 1rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 3rem;
  }
`;

const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const BlogTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #00ff00, #39ff13);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(0, 255, 0, 0.4);
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 0 0 20px rgba(0, 255, 0, 0.4);
    }
    to {
      text-shadow: 0 0 30px rgba(0, 255, 0, 0.7);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BlogSubtitle = styled.p`
  color: #9ca3af;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.article`
  background: #111111;
  border: 1px solid #1a4a07;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(57, 255, 19, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(57, 255, 19, 0.2);
    border-color: #39ff13;

    img {
      transform: scale(1.05);
    }
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const CardTitle = styled.h2`
  color: #e5e7eb;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const CardMeta = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const ReadMoreButton = styled.button`
  background: linear-gradient(90deg, #39ff13, #1a4a07);
  border: none;
  border-radius: 5px;
  color: #0a0a0a;
  padding: 0.75rem 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(57, 255, 19, 0.3);
  }
`;

// Blog Card Component
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card>
      <CardImageWrapper>
        <CardImage src={post.imageUrl} alt="" />
      </CardImageWrapper>
      <CardContent>
        <CardTitle>{post.headline}</CardTitle>
        <CardMeta>
          {post.date} | Comments ({post.commentsCount})
        </CardMeta>
        <ReadMoreButton>Read More</ReadMoreButton>
      </CardContent>
    </Card>
  );
};

// Main Blog Component
export default function Blogs() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      headline: "Post 1 Headline",
      date: "Fri Jun 19 2020",
      commentsCount: 0,
      imageUrl: "/blog-1.jpeg",
    },
    {
      id: 2,
      headline: "Post 2 Headline",
      date: "Fri Jun 19 2020",
      commentsCount: 0,
      imageUrl: "/blog-2.jpg",
    },
    {
      id: 3,
      headline: "Post 3 Headline",
      date: "Fri Jun 19 2020",
      commentsCount: 0,
      imageUrl: "/blog-3.jpg",
    },
  ];

  return (
    <BlogContainer>
      <BlogHeader>
        <BlogTitle>Our Blog</BlogTitle>
        <BlogSubtitle>
        Sample text. Click to select the text box. Click again or double click
        to start editing the text.Sample text. Click to select the text box. Click again or double click
        to start editing the text.Sample text. Click to select the text box. Click again or double click
        to start editing the text.
        </BlogSubtitle>
      </BlogHeader>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </BlogGrid>
    </BlogContainer>
  );
}
