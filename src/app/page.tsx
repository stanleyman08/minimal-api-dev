import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from '../global-config';
import { Block } from './(components)/block';
import { Section } from './(components)/section';

// ----------------------------------------------------------------------

export default function IndexPage() {
  const renderHead = (
    <Stack spacing={3} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" component="h1" sx={{ fontWeight: 'fontWeightBold' }}>
        The starting point for your next project v{CONFIG.appVersion}
      </Typography>
      <Typography variant="body2">
        Host API: <strong>{CONFIG.basePath}</strong>
      </Typography>
    </Stack>
  );

  const renderAuth = (
    <Section title="Auth">
      <Block method="GET" description="Get user info after login" path="/api/auth/me" />
      <Block method="POST" description="Login" path="/api/auth/login" />
      <Block method="POST" description="Register" path="/api/auth/register" />
    </Section>
  );

  const renderBlog = (
    <Section title="Blog">
      <Block method="GET" description="Get all posts" path="/api/post/list" />
      <Block
        method="GET"
        description="Get post details by title"
        path={
          <>
            /api/post/details?title=<strong>{`{title}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get latest posts"
        path={
          <>
            /api/post/latest?title=<strong>{`{title}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Search post"
        path={
          <>
            /api/post/search?query=<strong>{`{query}`}</strong>
          </>
        }
      />
    </Section>
  );

  const renderCalendar = (
    <Section title="Calendar">
      <Block method="GET" description="Get all events" path="/api/calendar" />
      <Block method="POST" description="Create new event" path="/api/calendar" />
      <Block method="PUT" description="Update event" path="/api/calendar" />
      <Block method="PATCH" description="Delete event" path="/api/calendar" />
    </Section>
  );

  const renderChat = (
    <Section title="Chat">
      <Block
        method="GET"
        description="Search contacts"
        path={
          <>
            /api/chat?endpoint=<strong>contacts</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get all conversations"
        path={
          <>
            /api/chat?endpoint=<strong>conversations</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get conversation details by ID"
        path={
          <>
            /api/chat?conversationId=<strong>{`{conversationId}`}</strong>&endpoint=
            <strong>conversation</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Mark conversation as seen when click"
        path={
          <>
            /api/chat?conversationId=<strong>{`{conversationId}`}</strong>&endpoint=
            <strong>mark-as-seen</strong>
          </>
        }
      />

      <Block method="POST" description="Create new conversation" path="/api/chat" />
      <Block method="PUT" description="Update conversation" path="/api/chat" />
    </Section>
  );

  const renderKanban = (
    <Section title="Kanban">
      <Block method="GET" path="/api/kanban" description="Get Board" />
      <Block
        method="POST"
        description="Create column"
        path={
          <>
            /api/kanban?endpoint=<strong>create-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Update column"
        path={
          <>
            /api/kanban?endpoint=<strong>update-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Move column"
        path={
          <>
            /api/kanban?endpoint=<strong>move-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Clear column"
        path={
          <>
            /api/kanban?endpoint=<strong>clear-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Delete column"
        path={
          <>
            /api/kanban?endpoint=<strong>delete-column</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Create task"
        path={
          <>
            /api/kanban?endpoint=<strong>delete-task</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Update task"
        path={
          <>
            /api/kanban?endpoint=<strong>update-task</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Move task"
        path={
          <>
            /api/kanban?endpoint=<strong>move-task</strong>
          </>
        }
      />
      <Block
        method="POST"
        description="Delete task"
        path={
          <>
            /api/kanban?endpoint=<strong>delete-task</strong>
          </>
        }
      />
    </Section>
  );

  const renderMail = (
    <Section title="Mail">
      <Block method="GET" description="Get all labels" path="/api/mail/labels" />
      <Block
        method="GET"
        description="Get mails by labelId"
        path={
          <>
            /api/mail/list?labelId=<strong>{`{labelId}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Get mail details by ID"
        path={
          <>
            /api/mail/details?mailId=<strong>{`{mailId}`}</strong>
          </>
        }
      />
    </Section>
  );

  const renderProduct = (
    <Section title="Product">
      <Block method="GET" description="Get all products" path="/api/product/list" />
      <Block
        method="GET"
        description="Get product details by ID"
        path={
          <>
            /api/product/details?productId=<strong>{`{productId}`}</strong>
          </>
        }
      />
      <Block
        method="GET"
        description="Search product"
        path={
          <>
            /api/product/search?query=<strong>{`{query}`}</strong>
          </>
        }
      />
    </Section>
  );

  const renderPagination = (
    <Section title="Pagination">
      <Block
        method="GET"
        description="Get products"
        path={
          <>
            /api/pagination?page=<strong>{`{page}`}</strong>&perPage=<strong>{`{perPage}`}</strong>
          </>
        }
      />
    </Section>
  );

  return (
    <Container maxWidth="md" sx={{ p: 5, my: 5, fontFamily: 'fontFamily' }}>
      <Stack spacing={3}>
        {renderHead}

        {renderAuth}
        {renderBlog}
        {renderCalendar}
        {renderChat}
        {renderKanban}
        {renderMail}
        {renderProduct}
        {renderPagination}
      </Stack>
    </Container>
  );
}
